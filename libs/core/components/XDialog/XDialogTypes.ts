export type XDialogType = 'default' | 'destructive'

export type XDialogOptions = {
    confirmButtonText   ?: string
    cancelButtonText    ?: string
}

export interface IXDialogProps {
    title               : string
    message             : string
    type                : XDialogType
    onConfirm           : () => void
    onCancel            : () => void
    onClose             : () => void
    options             : XDialogOptions
}
export interface IXDialogFireParams
    extends Partial<IXDialogProps> {
    title               : string
    message             : string
}