import React,{useEffect} from "react";
import {useDispatch} from "react-redux";
import {auth} from '../_actions/user_action'

export default function(SpecificComponent, option, adminRoute = null){
    //option 값
    //null => 아무나 출입이 가능한 페이지
    //true => 로그인한 유저만 출입이 가능
    //false => 로그인한 유저는 출입 불가능

    //adminRoute 어드민 유무
    //true 어드민만
    //false 어드민 x


    function AuthenticationCheck(props){

        const dispatch = useDispatch()

        useEffect(()=>{
            dispatch(auth()).then(response=>{

                //로그인 하지 않은 상태
                if(!response.payload.isAuth){
                    if(option === true){
                        props.history.push('/login')
                    }
                }else{
                    //로그인 한  상태
                    if(adminRoute && !response.payload.isAdmin){
                        props.history.push('/')
                    }else{
                        if(option === false){
                            props.history.push('/')
                        }
                    }
                }
            })
        }, [])

        return (
            <SpecificComponent/>
        )
    }

    return AuthenticationCheck
}