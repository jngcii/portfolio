import React from "react";
import Entry from "./Entry";
import Motive from "./Motive";
import Htu from "./Htu";
import Tech from "./Tech";

export default function({linkId}) {
    return (
        <div>
            <Entry linkId={linkId} />
            <Motive />
            <Htu />
            <Tech />
        </div>
    );
}