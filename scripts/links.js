/**
 * file:        link.js
 * description: Contains link opening functions for the index of the web app.
 * author:      Liam Fruzyna
 * date:        2021-05-24
 */

/**
 * function:    scout
 * parameters:  none
 * returns:     none
 * description: Start the selected scouting mode.
 */
function scout()
{
    let type    = get_selected_type()
    let event   = get_event()
    let position = get_position()
    let user    = get_user()
    let query   = ''
    if (type === PIT_MODE)
    {
        query = {'page': 'pits', [EVENT_COOKIE]: event, [USER_COOKIE]: user}
    }
    else
    {
        query = {'page': 'matches', [TYPE_COOKIE]: type, [EVENT_COOKIE]: event, [POSITION_COOKIE]: position, [USER_COOKIE]: user}
    }
    return build_url('selection', query)
}

/**
 * function:    open_ranker
 * parameters:  none
 * returns:     none
 * description: Open the team ranker interface.
 */
function open_ranker()
{
    return build_url('selection', {'page': 'ranker', [TYPE_COOKIE]: get_selected_type(), [EVENT_COOKIE]: get_event()})
}

/**
 * function:    open_sides
 * parameters:  none
 * returns:     none
 * description: Open the side-by-side comparison interface.
 */
function open_sides()
{
    return build_url('selection', {'page': 'sides', [TYPE_COOKIE]: get_selected_type(), [EVENT_COOKIE]: get_event()})
}

/**
 * function:    open_picks
 * parameters:  none
 * returns:     none
 * description: Open the pick list interface.
 */
function open_picks()
{
    return build_url('selection', {'page': 'picklists', [EVENT_COOKIE]: get_event()})
}

/**
 * function:    open_whiteboard
 * parameters:  none
 * returns:     none
 * description: Open the virtual whiteboard.
 */
function open_whiteboard()
{
    return build_url('selection', {'page': 'whiteboard', [EVENT_COOKIE]: get_event()})
}

/**
 * function:    open_advanced
 * parameters:  none
 * returns:     none
 * description: Open the advanced stats page.
 */
function open_advanced()
{
    return build_url('selection', {'page': 'advanced', [EVENT_COOKIE]: get_event()})
}

/**
 * function:    open_results
 * parameters:  none
 * returns:     none
 * description: Open the results of the selected scouting mode.
 */
function open_results()
{
    return build_url('selection', {'page': 'results', 'type': get_selected_type(), [EVENT_COOKIE]: get_event()})
}

/**
 * function:    open_teams
 * parameters:  none
 * returns:     none
 * description: Open the team overview.
 */
function open_teams()
{
    return build_url('selection', {'page': 'teams', [EVENT_COOKIE]: get_event(), [USER_COOKIE]: get_user()})
}

/**
 * function:    open_matches
 * parameters:  none
 * returns:     none
 * description: Open the match overview.
 */
function open_matches()
{
    return build_url('selection', {'page': 'match-overview', [EVENT_COOKIE]: get_event(), [USER_COOKIE]: get_user()})
}

/**
 * function:    open_users
 * parameters:  none
 * returns:     none
 * description: Open the user overview.
 */
function open_users()
{
    return build_url('selection', {'page': 'users', [EVENT_COOKIE]: get_event(), [USER_COOKIE]: get_user()})
}

/**
 * function:    open_pivot
 * parameters:  none
 * returns:     none
 * description: Open the pivot table page.
 */
function open_pivot()
{
    return build_url('selection', {'page': 'pivot', 'type': get_selected_type(), [EVENT_COOKIE]: get_event(), [USER_COOKIE]: get_user()})
}

/**
 * function:    open_config
 * parameters:  none
 * returns:     none
 * description: Open the config generator.
 */
function open_config()
{
    return build_url('index', {'page': 'config-generator', [EVENT_COOKIE]: get_event(), [USER_COOKIE]: get_user()})
}

/**
 * function:    open_settings
 * parameters:  none
 * returns:     none
 * description: Open the settings editor.
 */
function open_settings()
{
    return build_url('index', {'page': 'settings', [EVENT_COOKIE]: get_event(), [USER_COOKIE]: get_user()})
}