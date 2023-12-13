import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";

const WatchPage: FC = () => {
    const [searchParams] = useSearchParams();
    
    const dispatch = useDispatch();
    useEffect(() => {
        setTimeout(() => {
            dispatch(closeMenu());
        }, 500);
    });
    return (
        <div className="px-10">
            <iframe
                width="1200"
                height="600"
                src= {'https://www.youtube.com/embed/' + searchParams.get('v')}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default WatchPage;
