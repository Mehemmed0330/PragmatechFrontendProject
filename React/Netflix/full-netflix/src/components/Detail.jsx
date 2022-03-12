import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { instanceV3 } from './hook/api'

const Detail = () => {
  const { id, type } = useParams()
  const [data, setData] = useState()

  useEffect(() => {
    (async () => {
      const { data } = await instanceV3.get(`/${type}/${id}`)
      setData(data)
    })()
  }, [])

  return <div>{data?.img}</div>
}

export default Detail
