import {iconList} from "./list.icon";

export const menuList = [
    {
        name: 'Media',
        child: [
            {
                name: 'Open File...',
                shortcut: 'Ctrl+O',
                icon: iconList.filter(i => i.key === 'file_asym').map(i => i.data),
                action: 'media_open_file'
            },
            {
                name: 'Open Multiple Files...',
                shortcut: 'Ctrl+Shift+O',
                icon: iconList.filter(i => i.key === 'file_asym').map(i => i.data),
                action: 'media_open_multiple_file'

            },
            {
                name: 'Open Folder...',
                shortcut: 'Ctrl+F',
                icon: iconList.filter(i => i.key === 'folder_gray').map(i => i.data)
            },
            {
                name: 'Open Disc...',
                shortcut: 'Ctrl+D',
                icon: iconList.filter(i => i.key === 'disc').map(i => i.data)
            },
            {
                name: 'Open Network Stream...',
                shortcut: 'Ctrl+N',
                icon: iconList.filter(i => i.key === 'lan').map(i => i.data)
            },
            {
                name: 'Open Capture Device...',
                shortcut: 'Ctrl+C',
                icon: iconList.filter(i => i.key === 'capture_card').map(i => i.data)
            },
            {
                name: 'Open Location from clipboard',
                shortcut: 'Ctrl+V',
                icon: ''
            },
            {
                name: 'Open Recent Media',
                child:[{}, {name:'clear'}],
                icon: ''
            },
            {},
            {
                name: 'Save Playlist to File...',
                shortcut: 'Ctrl+Y',
                icon: ''
            },
            {
                name: 'Convert/Save...',
                shortcut: 'Ctrl+R',
                icon: ''
            },
            {
                name: 'Stream',
                shortcut: 'Ctrl+S',
                icon: iconList.filter(i => i.key === 'stream').map(i => i.data),
                action: 'media_stream'
            },
            {},
            {
                name: 'Quit at the end of playlist',
                icon: '',
                action: 'media_quit_after_playlist'
            },
            {
                name: 'Quit',
                shortcut: 'Ctrl+Q',
                icon: iconList.filter(i => i.key === 'exit').map(i => i.data),
                action: 'media_quit'
            }

        ]
    },
    {name: 'Playback', child: [
        {
            name: 'Title',
            child: []
        },
        {
            name: 'Chapter',
            child: []
        },
        {
            name: 'Program',
            child: []
        },
        {
            name: 'Custom Bookmarks',
            child: []
        },
        {},
        {
            name: 'Renderer',
            child: []
        },
        {},
        {
            name: 'Speed',
            child:[]
        },
        {},
        {
            name: 'Jump Forward',
            icon: iconList.filter(i => i.key === 'play').map(i => i.data),
        },
        {
            name: 'Jump Backward',
            icon: iconList.filter(i => i.key === 'stop').map(i => i.data),
        },
        {
            name: 'Jump to Specific Time',
        },
        {},
        {
            name: 'Play',
            icon: iconList.filter(i => i.key === 'play').map(i => i.data),
        },
        {
            name: 'Stop',
            icon: iconList.filter(i => i.key === 'stop').map(i => i.data),
        },
        {
            name: 'Previous',
            icon: iconList.filter(i => i.key === 'previous').map(i => i.data),
        },
        {
            name: 'Next',
            icon: iconList.filter(i => i.key === 'next').map(i => i.data),
        },
        {
            name: 'Record',
            icon: iconList.filter(i => i.key === 'record').map(i => i.data),
        },
        ]},
    {name: 'Audio', child: [
        {
            name: 'Audio Track',
            child: []
        },
        {
            name: 'Audio Device',
            child: []
        },
        {
            name: 'Stereo Mode',
            child: []
        },
        {},
        {
            name: 'Visualizations',
            child: []
        },
        {
            name: 'Increase Volume',
            icon: iconList.filter(i => i.key === 'volume_high').map(i => i.data),

        },
        {
            name: 'Decrease Volume',
            icon: iconList.filter(i => i.key === 'volume_low').map(i => i.data),
        },
        {
            name: 'Mute',
            icon: iconList.filter(i => i.key === 'volume_muted').map(i => i.data),

        }
    ]},

    {name: 'Video', child: [
        {
            name: 'Video Track',
            child: []
        },
        {},
        {
            name: 'Fullscreen',
        },
        {
            name: 'Always Fit Window',
        },
        {
            name: 'Set as Wallpaper'
        },
        {},
        {
            name: 'Zoom',
            child:[]
        },
        {
            name: 'Aspect Ratio',
            child:[]
        },
        {
            name: 'Crop',
            child:[]
        },
        {},
        {
            name: 'Deinterlace',
            child: []
        },
        {
            name: 'Deinterlace mode',
            child: []
        },
        {},
        {
            name: 'Take Snapshot'
        }
    ]},
    {name: 'Subtitle', child: [
            {name: 'Add Subtitle File...'},
            {},
            {
                name: 'Sub Track',
                child: []
            },
    ]},
    {name: 'Tools', child: [
        {
            name: 'Effects and Filters',
            shortcut: 'Ctrl+E',
            icon: iconList.filter(i => i.key === 'setting').map(i => i.data),
        },
        {
            name: 'Track Synchronization'
        },
        {
            name: 'Media Information',
            shortcut: 'Ctrl+I',
            icon: iconList.filter(i => i.key === 'info').map(i => i.data),
        },
        {
            name: 'Codec Information',
            shortcut: 'Ctrl+J',
            icon: iconList.filter(i => i.key === 'info').map(i => i.data),
        },
        {
            name: 'VLM Configuration',
            shortcut: 'Ctrl+Shift+W'
        },
        {
            name: 'Program Guide'
        },
        {
            name: 'Messages',
            shortcut: 'Ctrl+M',
            icon: iconList.filter(i => i.key === 'messages').map(i => i.data),

        },
        {
            name: 'Plugins and extensions'
        },
        {},
        {
            name: 'Customize Interface...',
            icon: iconList.filter(i => i.key === 'preferences').map(i => i.data),
        },
        {
            name: 'Preferences',
            shortcut: 'Ctrl+P',
            icon: iconList.filter(i => i.key === 'preferences').map(i => i.data),
        }

    ]},
    {name: 'View', child: [
        {
            name: 'Playlist',
            shortcut: 'Ctrl+L',
            icon: iconList.filter(i => i.key === 'playlist').map(i => i.data),
        },
            {
                name: 'Docked Playlist',
            },
            {},
            {
                name: 'Always on top',
            },
            {},
            {
                name: 'Minimal Interface',
                shortcut: 'Ctrl+H',
            },
            {
                name: 'Fullscreen Interface',
                shortcut: 'Ctrl+H',
            },
            {
                name: 'Advanced Controls',
            },
            {
                name: 'Status Bar',
            },
            {},
            {
                name: 'Add Interface',
                child:[],
            },
            {},
            {
                name: 'VLsub',
                child:[],
            },


        ]},
    {name: 'Help', child: [
        {
            name: 'Help',
            shortcut: 'F1',
            icon: iconList.filter(i => i.key === 'help').map(i => i.data),
        },
        {
            name: 'Check for Updates...',
        },
        {},
        {
            name: 'About',
            shortcut: 'Shift+F1',
            icon: iconList.filter(i => i.key === 'info').map(i => i.data),
        },

        ]}
]

