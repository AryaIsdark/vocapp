import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as selectors from 'store/posts/selectors'
import * as actions from 'store/posts/actions'
import { useTranslation } from 'react-i18next'



const Posts = () => {
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const data = useSelector(selectors.data);
    const hasError = useSelector(selectors.hasError);
    const isLoading = useSelector(selectors.isLoading);

    useEffect(() => {
        dispatch(actions.loadData())
    }, [dispatch])


    if (hasError) return <>{t('misc.error')}</>
    if (isLoading) return <>{t('misc.loading')}</>

    return (
    <>
     {data.length && (
         data.map((element: any) => 
             <div>{element.title}</div>
         )
     )}
    </>
    )
}

export default Posts