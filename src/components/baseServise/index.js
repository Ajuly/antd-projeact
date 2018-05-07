import React from 'react'
import axios from 'axios'
import urls from '../../contones/urls'

export default class BaseServise{
    static ajax (option){
        let MockApi = 'https://www.easy-mock.com/mock/5ae027c63413da4ea76604b2/api'
        if(option.isMock){
            option.baseURL = MockApi
        }else{
            option.baseURL = urls.baseURL
        }

        return new Promise ((resolve,reject)=>{
            axios({
                url:option.url,
                method:option.type||'post',
                data:JSON.stringify(option.data||''),
                timeout:8000,
                baseURL:option.baseURL,
            }).then((response)=>{
                // console.log(response)
                if(response.status==200){
                    let result = response.data
                    if(result.error){
                        alert(result.error.message)
                    }
                    resolve(result)
                }else {
                    reject(response.data)
                }
            }).catch((error)=>{
                console.error(`request URL ${error}`)
            })
        })
    }
}