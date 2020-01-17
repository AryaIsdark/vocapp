import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as selectors from 'store/postDetails/selectors'
import * as actions from 'store/postDetails/actions'
import { useTranslation } from 'react-i18next'
import { Drawer } from 'antd'

interface Props {
    match: {
        params: {
            postId: string
        }
    };
    onClose?: () => void;
}

const PostDetails = ({ onClose, match }: Props) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    console.log(match)
    const { postId } = match.params;
    const data = useSelector(selectors.data);
    const hasError = useSelector(selectors.hasError);
    const isLoading = useSelector(selectors.isLoading);

    useEffect(() => {
        dispatch(actions.loadData(postId))
    }, [dispatch, postId])


    if (hasError) return <>{t('misc.error')}</>
    if (!data && !isLoading) return <>{t('misc.noData')}</>

    return (
        <Drawer visible={true} onClose={onClose} >
            {JSON.stringify(data)}
        </Drawer>
    )
}

export default PostDetails