import { useRouter } from "next/router";
import React from "react";

const Back = () => {
    const route = useRouter();

    return <button onClick={() => route.back()}>Regresar</button>;
};

export default Back;
