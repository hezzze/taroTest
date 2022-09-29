import { Image } from '@tarojs/components'
import { Component, PropsWithChildren } from 'react'
import './sf_icon.less'

interface IProps {
    src: string
}

class SFIcon extends Component<IProps, PropsWithChildren> {
    render() {
        return (
            <Image src={this.props.src} className='sf-icon' />
        )
    }
}

export { SFIcon }