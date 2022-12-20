import { css } from '@emotion/react';
import styled from '@emotion/styled';
import theme from '../../utils/theme';
import tw from 'twin.macro';

export interface TextInputProps {
    error?: string | Array<string>;
}

export const InputField = styled.div`
  ${tw`mb-3`}
`;

export const TextInputLabel = styled.label`
  ${tw`mb-[6px] font-medium text-[12px] leading-[18px] flex flex-row items-center`}
  color: ${theme.colors.gray.g700};
`;

const getInputStyling = ({
                             error,
                         }: {
    error: string | string[] | undefined;
}) => css`
  ${tw`w-full text-sm placeholder:text-sm rounded-lg px-[14px]`};
  box-shadow: 0px 1px 2px rgba(24, 24, 27, 0.05);
  border: 1px solid ${theme.colors.gray.g300};
  color: ${theme.colors.gray.g900};
  outline: none;

  :focus {
    border: 1px solid #b8afff;
    box-shadow: 0px 1px 2px rgba(24, 24, 27, 0.05),
      0px 0px 0px 4px ${theme.colors.main.normalLightest};
  }

  ${error
    ? tw`border-red-600 hover:border-red-600 focus:border-red-600 focus:shadow-input-error`
    : null}
`;

export const TextInput = styled.input<TextInputProps>`
  ${({ error }) => getInputStyling({ error })};
  ${tw`h-10`};
`;

export const TextArea = styled.textarea<TextInputProps>`
  ${({ error }) => getInputStyling({ error })};
  ${tw`h-20 py-[10px]`};
  resize: none;
`;

export const InputError = styled.div(() => [tw`text-xs text-red-600 mt-1`]);
