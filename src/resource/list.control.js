import {iconList} from "./list.icon";

export const controlItems = [
    {element: 'play'},
    {element: 'stop'},
    {element: 'open'},
    {element: 'previous_backward'},
    {element: 'next_forward'},
    {element: 'slower'},
    {element: 'faster'},
    {element: 'fullscreen'},
    {element: 'defullscreent'},
    {element: 'extended_panel'},
    {element: 'playlist'},
    {element: 'snapshot'},
    {element: 'record'},



    {element: 'a_b_loop'},
    {element: 'frame_by_frame'},
    {element: 'trickplay_reverse'},
    {element: 'step_backward'},
    {element: 'step_forward'},
    {element: 'quit'},
    {element: 'random'},
    {element: 'loop_repeat'},
    {element: 'information'},
    {element: 'previous'},
    {element: 'next'},
    {element: 'open_subtitles'},
    {element: 'dock_fullscreen_controller'},
    {element: 'spacer'},
    {element: 'expanding_spacer'},
    {element: 'splitter'},
    {element: 'time_slider'},
    {element: 'time'},
    {element: 'volume'},
    {element: 'small_volume'},
    {element: 'dvd_menus'},
    {element: 'teletext'},
    {element: 'advanced_buttons'},
    {element: 'aspect_ratio_selector'},
    {element: 'speed_selector'},
    {element: 'elapsed_time'},
    {element: 'total_remaining_time'},
]

export const controlList = [
    [
        {
            element: 'play',
            type: 'control-toggle-button',
            checked_icon: iconList.filter(i => i.key === 'pause').map(i => i.data),
            unchecked_icon: iconList.filter(i => i.key === 'play').map(i => i.data)
        },
        {
            element: 'stop',
            type: 'control-button',
            icon: iconList.filter(i => i.key === 'stop').map(i => i.data),
        },
        {
            element: 'open',
            type: 'control-button',
            icon: iconList.filter(i => i.key === 'eject').map(i => i.data),
        },
        {
            element: 'previous_backward',
            type: 'control-button',
            icon: iconList.filter(i => i.key === 'previous').map(i => i.data),
        },
        {
            element: 'next_forward',
            type: 'control-button',
            icon: iconList.filter(i => i.key === 'next').map(i => i.data),
        },
        {
            element: 'slower',
            type: 'control-button',
            icon: iconList.filter(i => i.key === 'slower').map(i => i.data),
        },
        {
            element: 'faster',
            type: 'control-button',
            icon: iconList.filter(i => i.key === 'faster').map(i => i.data),
        },
        {
            element: 'fullscreen',
            type: 'control-button',
            icon: iconList.filter(i => i.key === 'fullscreen').map(i => i.data),
        },
        {
            element: 'defullscreent',
            type: 'control-button',
            icon: iconList.filter(i => i.key === 'defullscreent').map(i => i.data),
        },
        {
            element: 'extended_panel',
            type: 'control-button',
            icon: iconList.filter(i => i.key === 'setting').map(i => i.data),
        },
        {
            element: 'playlist',
            type: 'control-button',
            icon: iconList.filter(i => i.key === 'playlist').map(i => i.data),
        },
        {
            element: 'snapshot',
            type: 'control-button',
            icon: iconList.filter(i => i.key === 'snapshot').map(i => i.data),
        },
        {
            element: 'record',
            type: 'control-button',
            icon: iconList.filter(i => i.key === 'record').map(i => i.data),
        },





    ],
    [


    ],
    [


    ]
]
