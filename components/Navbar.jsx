import Image from 'next/image';
import React from 'react'
import styles from '../styles/Navbar.module.css';
import { useSelector } from 'react-redux';
import Link from 'next/link';

function Navbar() {

    const quantity = useSelector((state) => state.cart.quantity);

    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.callButton}>
                    <Image src={'/img/telephone.png'} height={32} width={32}/>
                </div>
                <div className={styles.texts}>
                    <div className={styles.text}>Order Now!</div>
                    <div className={styles.text}>
                        <a href='callto:123456789'>+011-123-456</a>
                    </div>
                </div>
            </div>
            <div className={styles.item}>
                <ul className={styles.list}>
                    <Link href={'/'}>
                        <li className={styles.listItem}>Home</li>
                    </Link>
                    <li className={styles.listItem}>Product</li>
                    <li className={styles.listItem}>Menu</li>
                    <h1 style={{fontFamily: 'cursive', fontSize: '35px', fontWeight: '600'}}>Uni-Pizza</h1>
                    <li className={styles.listItem}>Events</li>
                    <li className={styles.listItem}>Blog</li>
                    <li className={styles.listItem}>Contact</li>
                </ul>
            </div>
            <Link href="/cart">
                <div className={styles.item}>
                    <div className={styles.cart}>
                        <Image src={'/img/cart.png'} height={30} width={30}/>
                        <span className={styles.counter}>{quantity}</span>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Navbar
