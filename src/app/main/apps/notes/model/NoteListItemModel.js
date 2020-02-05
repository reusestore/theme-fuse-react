import FuseUtils from '@fuse/utils';

function NoteListItemModel(data)
{
    const item = data ? data : {};
    return {
        id     : item.id || FuseUtils.generateGUID(),
        checked: item.checked || false,
        text   : item.text || ''
    }
}

export default NoteListItemModel;
