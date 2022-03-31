import React from "react";
import { Helmet } from "react-helmet";

function HelmatComp(){
    return(
        <div>
            <Helmet>
                <meta charset="UTF-8"/>
                <meta name="description" content="Leafers main pages"/>
                <meta name="keywords" content="Reemo, Leafers, applications, flowers predictions"/>
                <meta name="author" content="Reemo"/>
                <meta name="title" content="Leafers" />  
                <meta name="application-name" content="Leafers"/>
                <meta property="og:site_name" content="leafers.xyz" />
                <meta property="og:url" content="https://leafers.xyz/" />
                <meta property="og:type" content="website"/>
                <meta property="og:description" content="Leafers - Hong Kong flowers recognizer" />
                <meta name="google-site-verification" content="VtbMfN8lFdLRZltix2ElH9f2ksmLxl7gxindDGwhA6w" />
            </Helmet>
        </div>
    )
}

export default HelmatComp