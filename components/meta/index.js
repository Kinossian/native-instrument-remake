import Head from "next/head";
import React from "react";

const Meta = ({ title, description }) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
        </Head>
    );
};
Meta.defaultProps = {
    title: "native-instrument.remake",
    description: "native-instrument.remake est un remake du site officiel native-instrument",
};
export default Meta;