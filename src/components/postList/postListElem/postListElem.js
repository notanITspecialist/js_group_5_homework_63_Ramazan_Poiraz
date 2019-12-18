import React from 'react';
import Card from "reactstrap/es/Card";
import CardTitle from "reactstrap/es/CardTitle";
import CardBody from "reactstrap/es/CardBody";
import CardSubtitle from "reactstrap/es/CardSubtitle";
import Button from "reactstrap/es/Button";

const PostListElem = (
    {date, title}
) => {
    return (
        <Card className='mt-2'>
            <CardBody>
                <CardSubtitle>{date}</CardSubtitle>
                <CardTitle className='font-weight-bolder'>{title}</CardTitle>
                <Button>Read more</Button>
            </CardBody>
        </Card>
    );
};

export default PostListElem;