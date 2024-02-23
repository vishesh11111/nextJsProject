'use client'
import api_wrapper from '@/app/wrapper/wrapper'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'

const Login = () => {
  const [data, setData] = useState("hello g");

  // useEffect(() => {
  //   getData();
  // }, [])

  // const getData = async () => {
  //   try {
  //     const responce = await api_wrapper("/api/users");
  //     console.log(responce?.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  return (
    <div>
      hellod dd
    </div>
  )
}



export default Login