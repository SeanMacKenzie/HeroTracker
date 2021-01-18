import React from "react";

const Comics = ({comicList=[]}) => {
    return (
        <div>
        { comicList.map((data,index) => {
            if(data) {
                return (
                    <div key={data.name}>
                        <h1>{data.name}</h1>
                    </div>
                )
            }
            return null
        }) }
        </div>
    );
}

export default Comics;