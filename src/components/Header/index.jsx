import clsx from 'clsx'
import style from './header.module.scss'

function Header() {
    return (
        <header>
            <div className={clsx(style.logo)}>
                <img src="/src/assets/imgs/interfaces/logo-dark.png" alt="Cinenjoy logo" />
            </div>
            <button className='text-red-500'>Hover me</button>
        </header>
    )
}

export default Header
