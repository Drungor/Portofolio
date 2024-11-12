const NavMenu = () => {
    return (
            <nav>
                <ul className="flex justify-end gap-x-4 p-4">
                    <li>
                        <a href="">projects</a>
                    </li>
                    <li>
                        <a href="">resume</a>
                    </li>
                    <li>
                        <a href="">contact</a>
                    </li>
                    <li>
                        {/* inserer switch button light mode ici  */}
                        {/* <button name="ligh-mode" ></button> */}
                    </li>
                </ul>
            </nav>
    )
}

export default NavMenu;