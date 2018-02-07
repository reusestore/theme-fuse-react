export const SET_SETTINGS = '[SETTINGS] SET SETTINGS';

export function setSettings(value)
{
    return {
        type: SET_SETTINGS,
        value
    }
}
