import {
  TApiBuilderGetConfig as TGetConfig,
  TApiBuilderPostConfig as TPostConfig,
} from '@/common/builders/ApiBuilder/types/configs'

export type TApiBuilderConfig<P = any> = TGetConfig | TPostConfig<P>
