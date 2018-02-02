import React from 'react';
import PropTypes from 'prop-types';
import './css/polestar.css';
import './css/sprite.css';
import './css/animate.css';

class Icon extends React.Component {
    static defaultProps = {
        type: 'font',
        size: 'inherit',
        color: 'inherit',
        spin: false,
        onClick: () => {},
    };

    static propTypes = {
        /** 아이콘 이름 */
        name: PropTypes.string.isRequired,
        /** 폰트 아이콘 / 이미지 스프라이트 아이콘 */
        type: PropTypes.oneOf(['font', 'image']),
        /** 아이콘 사이즈(px) 폰트 아이콘에만 적용 */
        size: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
        ]),
        color: PropTypes.string,
        spin: PropTypes.bool,
        /**
         * \[Event\] 아이콘 클릭시 발생하는 이벤트
         *
         * @param {object} e 이벤트 객체.
         */
        onClick: PropTypes.func,
    };

    render() {
        const prefix = this.props.type === 'font' ? 'ps-font-icon' : 'ps-image-icon';
        return (
            <i
                className={`${prefix}-${this.props.name}`}
                style={{
                    display: 'inline-flex',
                    fontSize: this.props.size,
                    color: this.props.color,
                    animation: this.props.spin ? 'spin 1s linear infinite' : null,
                }}
                onClick={this.props.onClick}
            />
        );
    }
}

export default Icon;
