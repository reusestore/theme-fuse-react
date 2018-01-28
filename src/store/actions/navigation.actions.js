
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
    console.info('Set settings Action');
    return {
        type: SET_NAVIGATION,
        settings
    }
}
export function resetNavigation()
{
    console.info('Reset settings Action');
    return {
        type: RESET_NAVIGATION
    }
}
