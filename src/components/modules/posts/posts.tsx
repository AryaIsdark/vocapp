import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as selectors from 'store/posts/selectors'
import * as actions from 'store/posts/actions'


const Posts = () => {
    const dispatch = useDispatch();
    const data = useSelector(selectors.data);
    const hasError = useSelector(selectors.hasError);
    const isLoading = useSelector(selectors.isLoading);

    useEffect(() => {
        dispatch(actions.loadData())
    }, [dispatch])


    if (hasError) return ('error')
    if (isLoading) return ('loading')

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