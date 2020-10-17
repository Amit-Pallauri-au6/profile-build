import React from 'react'
import '../styles/detailsPage-stylings.css'
import { Card, CardBody, CardFooter, CardText, CardImg, Button } from 'reactstrap'

const DetailsPage = () => {
    return (
        <div className="details-container">
            <section id="bar">
                <div id="bar-content">
                    <span style={{ position :'relative', left : '150%' }}>
                        JavaScript (804)
                    </span>
                </div>
            </section>
            <main className="content-conatiner">
                <Card className='card-container'>
                    <img id='verified' src="https://img.icons8.com/color/15/000000/instagram-verification-badge.png"/>
                    <img id='online' src="https://img.icons8.com/emoji/15/000000/green-circle-emoji.png"/>
                    <div className='img-container'>
                        <CardImg  className='card-img'  top src="https://images.unsplash.com/photo-1521676259650-675b5bfec1ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="person"/>
                    </div>
                    <CardBody style={{ textAlign : 'center'}}>
                        <CardText>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi rem iure maiores aliquid nulla temporibus.</CardText>    
                    </CardBody>
                    <ul>
                        <li>js</li>
                        <li>react</li>
                        <li>vue</li>
                        <li>nodeJs</li>
                        <li>components</li>
                        <li>ember</li>
                        <li>frontend</li>
                        <li>css</li>
                    </ul>
                    <Button>Availabale now</Button>
                    <p id='foot'>seen 6 hours ago</p>
                </Card>
                <Card className='card-container'>
                    <img id='verified' src="https://img.icons8.com/color/15/000000/instagram-verification-badge.png"/>
                    <div className='img-container'>
                        <CardImg  className='card-img'  top src="https://images.unsplash.com/photo-1533088468076-d1f6bdf16f62?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="person"/>
                    </div>
                    <CardBody style={{ textAlign : 'center'}}>
                        <CardText>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi rem iure maiores aliquid nulla temporibus.</CardText>    
                    </CardBody>
                    <ul>
                        <li>js</li>
                        <li>react</li>
                        <li>ember</li>
                        <li>frontend</li>
                        <li>css</li>
                    </ul>
                    <Button>Availabale now</Button>
                    <p id='foot'>seen 6 hours ago</p>
                </Card>
                <Card className='card-container'>
                    <img id='verified' src="https://img.icons8.com/color/15/000000/instagram-verification-badge.png"/>
                    <div className='img-container'>
                        <CardImg  className='card-img'  top src="https://images.unsplash.com/photo-1520528105264-de3db89485f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="person"/>
                    </div>
                    <CardBody style={{ textAlign : 'center'}}>
                        <CardText>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi rem iure maiores aliquid nulla temporibus.</CardText>    
                    </CardBody>
                    <ul>
                        <li>js</li>
                        <li>react</li>
                        <li>vue</li>
                        <li>nodeJs</li>
                        <li>components</li>
                        <li>ember</li>
                    </ul>
                    <Button>Availabale now</Button>
                    <p id='foot'>seen 6 hours ago</p>
                </Card>
                <Card className='card-container'>
                    <img id='verified' src="https://img.icons8.com/color/15/000000/instagram-verification-badge.png"/>
                    <div className='img-container'>
                        <CardImg  className='card-img'  top src="https://images.unsplash.com/photo-1580487769846-e3a4c82631cf?ixlib" alt="person"/>
                    </div>
                    <CardBody style={{ textAlign : 'center', margin: 0, padding : 0 }}>
                        <CardText style={{ margin: 0, padding : 0 }} >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi rem iure maiores aliquid nulla temporibus.</CardText>    
                    </CardBody>
                    <ul>
                        <li>js</li>
                        <li>react</li>
                        <li>vue</li>
                        <li>nodeJs</li>
                        <li>components</li>
                        <li>ember</li>
                        <li>frontend</li>
                        <li>css</li>
                    </ul>
                    <Button>Availabale now</Button>
                    <p id='foot'>seen 6 hours ago</p>
                </Card>
                <Card className='card-container'>
                    <img id='verified' src="https://img.icons8.com/color/15/000000/instagram-verification-badge.png"/>
                    <div className='img-container'>
                        <CardImg  className='card-img'  top src="https://images.unsplash.com/photo-1528109688329-6a043167789d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="person"/>
                    </div>
                    <CardBody style={{ textAlign : 'center'}}>
                        <CardText>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi rem iure maiores aliquid nulla temporibus.</CardText>    
                    </CardBody>
                    <ul>
                        <li>js</li>
                        <li>react</li>
                        <li>vue</li>
                        <li>ember</li>
                        <li>frontend</li>
                        <li>css</li>
                    </ul>
                    <Button>Availabale now</Button>
                    <p id='foot'>seen 6 hours ago</p>
                </Card>
            </main>
        </div>
    )
}

export default DetailsPage
