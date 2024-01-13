import style from './PeoplesAbout.module.css';

const PeoplesAbout = () => {
    return (
        <div className={style.Box}>
            <h2>What the People Thinks About Us</h2>
            <section>
                <div>
                    <div>
                        <img src="" alt="" />
                        <h2>Natasha</h2>
                        <p>Moscow, Russia</p>
                    </div>
                    <p>Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been.</p>
                </div>
                <div>
                    <div>
                        <img src="" alt="" />
                        <h2>Raymond</h2>
                        <p>Galario UK, London</p>
                    </div>
                    <p>Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been scrambled it to make a type book.</p>
                </div>
                <div>
                    <div>
                        <img src="" alt="" />
                        <h2>Benny</h2>
                        <p>Roll USA, New York</p>
                    </div>
                    <p>Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been scrambled.</p>
                </div>
            </section>
        </div>
    );
};

export default PeoplesAbout;