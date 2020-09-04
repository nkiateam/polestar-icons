module.exports = {
    extends: ['polestar'],
    rules: {
        'max-len': [1, 120, 2, { ignoreComments: true, ignoreStrings: true }],
        indent: [1, 4, { SwitchCase: 1, ignoredNodes: ['TemplateLiteral'] }], // AsyncSvg.js 의 dynamic import 에 대한 rule 제외
        // "arrow-body-style": ["error", "as-needed", { "requireReturnForObjectLiteral": true }],
        // "arrow-parens": "off", // Incompatible with prettier
        // "react/jsx-indent": [1, 4],
        // "linebreak-style": 'off', // Don't play nicely with Windows.
        // "react/jsx-filename-extension": ["error", { extensions: [".js"] }], // airbnb is using .jsx
        // "react/prefer-stateless-function": "off",
        // "react/prop-types": "off",
        // "react/jsx-indent-props": [2, 4],
        // "react/forbid-prop-types": "off",
        // "react/default-props-match-prop-types": "off",
        // "jsx-a11y/href-no-hash": "off",
        // "jsx-a11y/click-events-have-key-events": "off",
        // "jsx-a11y/no-static-element-interactions": "off",
        // "import/no-extraneous-dependencies": "off",
        // "import/no-unresolved": "off",
        // "import/extensions": "off",
        // "no-underscore-dangle": "off",
        // "no-param-reassign": ["error", { "props": false }],
        // "no-plusplus": "off"
    },
    settings: {
        'import/resolver': {
            webpack: {
                config: './webpack.config.js',
            },
        },
    },
};
