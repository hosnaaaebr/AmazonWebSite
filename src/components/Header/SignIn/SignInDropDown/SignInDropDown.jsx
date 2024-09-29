import styles from './SignInDropDown.module.scss';

const SignInDropDown = () => {
    const datas = [
        "Account", 
        "Orders", 
        "Recommendations", 
        "Browsing History", 
        "Watchlist", 
        "Video", 
        "Purchases & Rentals", 
        "Kindle Unlimited", 
        "Subscribe & Save Items", 
        "Memberships & Subscriptions", 
        "Music Library"
    ];

    return (
        <div className={styles.container}>
            <div className={styles.BtnContainer}>
                <button className={styles.signInBtn}>
                    <p>Sign in</p>
                </button>
                <div className={styles.newAccount}>
                    <p>New Customer? <a href="">Click here</a></p>
                </div>
            </div>
            <div className={styles.AccountHistory}>
                <div className={styles.YourList}>
                    <h4>Your List</h4>
                    <div>
                        <p>Create a List</p>
                        <p>Find a List or Registry</p>
                    </div>
                </div>
                <div className={styles.YourAccount}>
                    <h4>Your Account</h4>
                    <div>
                    {datas.map((data) => (
                        <p key={data}>{data}</p>
                    ))}
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default SignInDropDown;
