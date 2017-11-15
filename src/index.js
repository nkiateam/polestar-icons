import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/*
1. font-awesome 하고 자체제작 icon font 하고는 폰트파일이 같은가? 따로 관리하는가?
2. prefix 로 fa 안쓰고 ps 등 다른 것을 사용 할 수 있는가?
3. 아이콘 클래스 명 규칙 정하기(icon font/sprite)
예) <i class="fa fa-bar-chart fa-2x">
4. icon font 와 sprite 간에 서로 중복되는 아이콘 허용?
5. 아이콘 사이즈 정의해야 한다.
*/

const Icon = ({ type, name, size }) => {
	const _type = type === 'font' ? 'fa' : '';
	const _className = classNames(_type, name);
	return (
		<i className={_className}></i>
	);
};

Icon.propTypes = {
	/** 
	 * font icon 인지 image icon 인지 설정 
	 * @default font
	 */
	type: PropTypes.oneOf(['font','image']).isRequired,
	/** The name of Icon */
	name: PropTypes.string.isRequired,
	/** The size of Icon */
	size: PropTypes.oneOf(['sm', 'md', 'lg']).isRequired,
};
  
Icon.defaultProps = {
	type: 'font',
	size: 'md'
};

export default Icon;