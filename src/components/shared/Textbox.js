import React from 'react';
import styled from 'styled-components/native';
import {renderNothing} from 'recompose';

// locals
import {TextInput, Text} from '~/components/shared';

export const Textbox = locals => {
    const config = locals.config || {};
    const element = (
        <Wrapper>
            <Label danger={locals.hasError}>{locals.label}</Label>
            <TextInput
                mask={config.mask}
                innerRef={e => {
                    element._owner._instance.refs = {input: e};
                }}
                autoCorrect={locals.autoCorrect}
                autoCapitalize={locals.autoCapitalize}
                hidden={locals.hidden}
                danger={locals.hasError}
                accessibilityLabel={locals.label}
                autoFocus={locals.autoFocus}
                blurOnSubmit={locals.blurOnSubmit}
                editable={locals.editable}
                keyboardType={locals.keyboardType}
                maxLength={locals.maxLength}
                multiline={locals.multiline}
                onBlur={locals.onBlur}
                onEndEditing={locals.onEndEditing}
                onFocus={locals.onFocus}
                onLayout={locals.onLayout}
                onSelectionChange={locals.onSelectionChange}
                onSubmitEditing={locals.onSubmitEditing}
                onContentSizeChange={locals.onContentSizeChange}
                placeholderTextColor={locals.placeholderTextColor}
                secureTextEntry={locals.secureTextEntry}
                selectTextOnFocus={locals.selectTextOnFocus}
                selectionColor={locals.selectionColor}
                numberOfLines={locals.numberOfLines}
                underlineColorAndroid={locals.underlineColorAndroid}
                clearButtonMode={locals.clearButtonMode}
                clearTextOnFocus={locals.clearTextOnFocus}
                enablesReturnKeyAutomatically={
                    locals.enablesReturnKeyAutomatically
                }
                keyboardAppearance={locals.keyboardAppearance}
                onKeyPress={locals.onKeyPress}
                returnKeyType={locals.returnKeyType}
                selectionState={locals.selectionState}
                onChangeText={value => locals.onChange(value)}
                onChange={locals.onChangeNative}
                placeholder={locals.placeholder}
                value={locals.value}
            />
        </Wrapper>
    );

    if (locals.hidden) return null;
    return element;
};

const Wrapper = styled.View`
    margin-bottom: 20;
`;
const Label = Text.extend`
    margin-bottom: 10;
`;
