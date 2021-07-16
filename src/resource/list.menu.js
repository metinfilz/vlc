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
            {name: 'Open Multiple Files...', shortcut: 'Ctrl+Shift+O', disable:true},
            {name: 'Open Multiple Files...', shortcut: 'Ctrl+Shift+O', disable:true},
            {name: 'Open Multiple Files...', shortcut: 'Ctrl+Shift+O', disable:true},

        ]},
    {name: 'Video', child: [
            {name: 'Open Multiple Files...', shortcut: 'Ctrl+Shift+O', disable:true},
            {name: 'Open Multiple Files...', shortcut: 'Ctrl+Shift+O', disable:true},
            {name: 'Open Multiple Files...', shortcut: 'Ctrl+Shift+O', disable:true},

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
            {name: 'Open Multiple Files...', shortcut: 'Ctrl+Shift+O', disable:true},
            {name: 'Open Multiple Files...', shortcut: 'Ctrl+Shift+O', disable:true},
            {name: 'Open Multiple Files...', shortcut: 'Ctrl+Shift+O', disable:true},

        ]},
    {name: 'View', child: [
        {
            name: 'Playlist',
            shortcut: 'Ctrl+L',
            icon: iconList.filter(i => i.key === 'help').map(i => i.data),
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

