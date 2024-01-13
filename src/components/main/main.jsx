import style from './main.module.css'

const Main = () => {
    return (
        <div className={style.Page}>
            <section className={style.Page_title}>
                <h1>Lets make your home beautiful together</h1>
                <p>There are many variations of the passages of lorem Ipsum fromavailable, majority.</p>
                <button className={style.Button}>
                    <a href="#">Get Started</a>
                </button>
            </section>
        </div>
    );
};

export default Main;
