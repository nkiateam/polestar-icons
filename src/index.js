import React from 'react';
import PropTypes from 'prop-types';

import AsyncSvg from './AsyncSvg';

import './css/polestar.css';
import './css/sprite.css';
import './css/animate.css';
import './css/size.css';
import './css/stacked.css';
import './css/svg.css';

class Icon extends React.Component {
    static propTypes = {
        /** 아이콘 이름 */
        name: PropTypes.string.isRequired,
        /** 폰트 아이콘 / 이미지 스프라이트 아이콘 */
        type: PropTypes.oneOf(['font', 'svg', 'image']),
        /** 아이콘 사이즈(em, lg, fw) - 폰트 아이콘에만 적용 */
        size: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string,
        ]),
        /** 아이콘 색상 */
        color: PropTypes.string,
        /** 아이콘 className */
        className: PropTypes.string,
        /** 아이콘 사용자 정의 CSS 스타일 */
        style: PropTypes.object,
        /** 아이콘 hide */
        hidden: PropTypes.bool,
        /** 아이콘 애니메이션 */
        animation: PropTypes.oneOf([
            'spin', 'spin-pulse', 'wrench', 'ring', 'vertical', 'horizontal', 'flash', 'bounce',
            'float', 'pulse', 'tada', 'passing', 'passing-reverse', 'burst', 'falling', 'shake',
        ]),
        /** 아이콘 애니메이션 표시 방법(항상, 일정시간, 호버, 부모노드 호버) */
        animationType: PropTypes.oneOf([
            'always', 'duration', 'hover', 'parent-hover',
        ]),
        /** 아이콘 애니메이션 표시 시간(초) */
        animationDuration: PropTypes.number,
        /** 중첩 아이콘 이름 */
        innerName: PropTypes.string,
        /** 중첩 사이즈(em) - 폰트 아이콘에만 적용 */
        innerSize: PropTypes.oneOfType([
            PropTypes.number,
            PropTypes.string,
        ]),
        /** 중첩 아이콘 색상 */
        innerColor: PropTypes.string,
        /** 중첩 아이콘 hide */
        innerHidden: PropTypes.bool,
        /** 중첩 아이콘 className */
        innerClassName: PropTypes.string,
        /** 중첩 아이콘 사용자 정의 CSS 스타일 */
        innerStyle: PropTypes.object,
        /** 아이콘 애니메이션 */
        innerAnimation: PropTypes.oneOf([
            'spin', 'spin-pulse', 'wrench', 'ring', 'vertical', 'horizontal', 'flash', 'bounce',
            'float', 'pulse', 'tada', 'passing', 'passing-reverse', 'burst', 'falling', 'shake',
        ]),
        /** 아이콘 애니메이션 표시 방법(항상, 일정시간, 호버, 부모노드 호버) */
        innerAnimationType: PropTypes.oneOf([
            'always', 'duration', 'hover', 'parent-hover',
        ]),
        /** 아이콘 애니메이션 표시 시간(초) */
        innerAnimationDuration: PropTypes.number,
        /** 중첩 아이콘 및 기본 아이콘의 배율(1배, 2배), default [1, 1] */
        stackRatio: PropTypes.array,
        /**
        * \[Event\] 아이콘 클릭시 발생하는 이벤트
        *
        * @param {object} e 이벤트 객체.
        */
        onClick: PropTypes.func,
    };

    static defaultProps = {
        type: 'font',
        size: 1,
        innerSize: 1,
        stackRatio: [1, 1],
        animationType: 'always',
        animationDuration: 15,
        innerAnimationType: 'always',
        innerAnimationDuration: 15,
        onClick: () => {},
    };

    // constructor(props) {
    //     super(props);

    //     this.state = {
    //     };
    // }

    getIcon = (
        name, className, size, color, hidden, style, animation, animationType, animationDuration,
        type, onClick, isStack, stackRatio,
    ) => {
        // const prefix = this.props.type === 'font' ? 'ps-font-icon' : 'ps-image-icon';
        const prefix = `ps-${type}-icon`;
        const stackRatioClass = isStack ? `icon-stack-${stackRatio}x` : '';
        const iconSize = Number.isNaN(Number(size)) ? `icon-${size}` : `icon-${size}x`;
        const animationClassName = this.getAnimationClassName(animation, animationType);
        const iconClassName = `polestar-icon ${prefix}-${name} ${iconSize} ${className || ''} ${stackRatioClass} ${animationClassName}`;
        const iconStyle = {
            ...style,
            color,
            visibility: hidden ? 'hidden' : 'visible',
        };

        // 애니메이션 타이머 설정
        if (animationType === 'duration') {
            setTimeout(() => {
                this.icon.classList.toggle('animated');
                this.icon.classList.toggle(`ps-${animation}`);
            }, animationDuration * 1000);
        }

        return (
            <i
                ref={(ref) => { this.icon = ref; }}
                className={iconClassName}
                role="presentation"
                style={iconStyle}
                onClick={onClick}
            />
        );
    }

    getAnimationClassName = (animation, animationType) => {
        if (animationType === 'hover') {
            return `ps-${animation} animated-hover`;
        } if (animationType === 'parent-hover') {
            return `ps-${animation}`;
        } if (!animation) {
            return '';
        }
        return `ps-${animation} animated`;
    }

    render() {
        const {
            name,
            type,
            size,
            color,
            hidden,
            className,
            style,
            animation,
            animationType,
            animationDuration,
            innerName,
            innerSize,
            innerColor,
            innerHidden,
            innerClassName,
            innerStyle,
            innerAnimation,
            innerAnimationType,
            innerAnimationDuration,
            stackRatio,
            onClick,
            ...rest
        } = this.props;

        if (type === 'svg') {
            return (
                <AsyncSvg
                    name={name}
                    className={className}
                    {...rest}
                />
            );
        }

        const icon = this.getIcon(
            name, className, size, color, hidden, style,
            animation, animationType, animationDuration,
            type, onClick, Boolean(innerName), stackRatio[0],
        );

        if (innerName) {
            const innerIcon = this.getIcon(
                innerName, innerClassName, innerSize || size, innerColor, innerHidden, innerStyle,
                innerAnimation, innerAnimationType, innerAnimationDuration,
                type, null, Boolean(innerName), stackRatio[1],
            );
            return (
                <span className="icon-stack">
                    {icon}
                    {innerIcon}
                </span>
            );
        }
        return icon;
    }
}

export default Icon;
