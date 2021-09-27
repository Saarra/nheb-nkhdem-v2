import React from 'react'
import { StyledHeader } from '../../styles/Header.styled'

function Header() {
    return (
        <StyledHeader >
        <header>
            <div className="container">
                <div className="intro-text">
                    <div className="intro-lead-in">
                        {/* <h1>
                            نحب نخدم
                        </h1> */}
                    </div>
                    {/* <div className="intro-heading">حب ما تعمل حتى تعمل ما تحب</div> */}
                    {/* <h3 className="desc-site">
                        موقع تونسي يهدف الى التعريف بمنتجات أصحاب المشاريع الصغرى و الصناعات اليدوية
                        <br />
                        و ينشر فيه عروض شغل
                    </h3> */}
                </div>
            </div>
        </header>
        </StyledHeader>
    )
}

export default Header
