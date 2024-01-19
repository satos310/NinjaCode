<template>
    <div>
        <b-navbar type="dark" variant="dark" fixed="top">   <!-- fixed="top" -> 画面上部に固定 -->
            <b-navbar-nav>
                <b-nav-item href = "#">Home</b-nav-item>
                <!-- Navbar dropdowns -->
                <b-nav-item-dropdown text="Lang" left>
                    <b-dropdown-item href="#">EN</b-dropdown-item>
                    <b-dropdown-item href="#">ES</b-dropdown-item>
                    <b-dropdown-item href="#">RU</b-dropdown-item>
                    <b-dropdown-item href="#">FA</b-dropdown-item>
                </b-nav-item-dropdown>

                <b-nav-item-dropdown text="User" left>
                    <b-dropdown-item href="#">Acount</b-dropdown-item>
                    <b-dropdown-item href="#">Setting</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>
        </b-navbar>
    </div>
</template>