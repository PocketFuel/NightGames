import { NightlyConnectAdapter } from '@nightlylabs/wallet-selector-solana'

let _adapter: NightlyConnectAdapter | undefined
export const getAdapter = async (persisted = true) => {
  if (_adapter) return _adapter
  _adapter = await NightlyConnectAdapter.build(
    {
      appMetadata: {
        name: 'Smash or Trash',
        description: 'Smash or Trash',
        icon: 'https://docs.nightly.app/img/logo.png',
      },
    },
    persisted
  )
  return _adapter
}
