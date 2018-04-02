export const GET_NAVIGATION = '[NAVIGATION] GET NAVIGATION';
export const SET_NAVIGATION = '[NAVIGATION] SET NAVIGATION';
export const RESET_NAVIGATION = '[NAVIGATION] RESET NAVIGATION';

export function getNavigation()
{
    return {
        type: GET_NAVIGATION
    }
}

export function setNavigation(settings)
{
    return {
        type: SET_NAVIGATION,
        settings
    }
}

export function resetNavigation()
{
    return {
        type: RESET_NAVIGATION
    }
}
