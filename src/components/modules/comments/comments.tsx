import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as selectors from 'store/comments/selectors'
import * as actions from 'store/comments/actions'
import { useTranslation } from 'react-i18next'
import { Comment as CommentItem, Icon, Tooltip, Avatar } from 'antd'
import { Comment } from 'types/comment'
import moment from 'moment'

interface Props {
    entityId: string
}


const Comments = ({ entityId }: Props) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const data = useSelector(selectors.data);
    const hasError = useSelector(selectors.hasError);
    const isLoading = useSelector(selectors.isLoading);

    useEffect(() => {
        dispatch(actions.loadData(entityId))
    }, [dispatch, entityId])

    if (hasError) return <>{t('misc.error')}</>
    if (!data.length && !isLoading) return <>{t('misc.noData')}</>

    return (
        <>
            {data.map((comment: Comment) =>
                <CommentItem
                    datetime={
                        <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                            <span>{moment().fromNow()}</span>
                        </Tooltip>
                    }
                    author={comment.email}
                    content={comment.body} />)}

        </>)

}

export default Comments