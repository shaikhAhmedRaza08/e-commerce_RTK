import React from 'react'
import { Button, Card } from 'react-bootstrap'

function ProductCard(props) {
    return (
        <div className="col-md-3" style={{ marginBottom: '10px' }}>
            <Card className='h-100'>
                <div className="text-center">
                    <Card.Img variant="top" style={{ width: '100px', height: '130px' }} src={`${props.product.image}`} />
                </div>
                <Card.Body>
                    <Card.Title>{props.product.title}</Card.Title>
                    <Card.Text>
                        $<small>{props.product.price}</small>
                    </Card.Text>
                </Card.Body>
                <Card.Footer style={{backgroundColor: 'white'}}>
                    <div className="d-grid">
                        <Button variant="primary" size='sm'>{props.buttonTitle}</Button>
                    </div>
                </Card.Footer>
            </Card>
        </div>
    )
}

export default ProductCard