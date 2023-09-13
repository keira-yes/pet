import { useState } from 'react'
import styles from './Sidebar.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import Collapse from 'shared/assets/icons/collapse.svg'
import Expand from 'shared/assets/icons/expand.svg'

export const Sidebar: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false)
    const onCollapseSidebar = (): void => {
        setCollapsed((prevState) => !prevState)
    }

    return (
        <aside className={classNames(styles.sidebar, [], { [styles.collapsed]: collapsed })}>
            <Button type='button' theme={ButtonTheme.TRANSPARENT} onClick={onCollapseSidebar}>
                {collapsed ? <Collapse /> : <Expand />}
            </Button>
            Sidebar
        </aside>
    )
}
