import {show, outside} from "../store/slice.dialog"

export const menuList = [
    { name: 'Media', child:[
        { name: 'Open File...', icon: 'file_asym', shortcut: 'Ctrl+O', action: outside('open-file') },
        { name: 'Open Multiple Files...', icon: 'file_asym', shortcut: 'Ctrl+Shift+O', action: show('media-file') },
        { name: 'Open Folder...', icon: 'folder_gray', shortcut: 'Ctrl+F', action: outside('open-folder') },
        { name: 'Open Disc...', icon: 'disc', shortcut: 'Ctrl+D', action: show('media-disc') },
        { name: 'Open Network Stream...', icon: 'lan', shortcut: 'Ctrl+N', action: show('media-stream') },
        { name: 'Open Capture Device...', icon: 'capture_card', shortcut: 'Ctrl+C', action: show('media-device') },
        { name: 'Open Location from clipboard', shortcut: 'Ctrl+V', action: show('open-url') },

        {
            name: 'Open Recent Media',
            disable:true,
        },
        {},
        {
            name: 'Save playlist to File...',
            shortcut: 'Ctrl+Y',
            disable:true,
        },
        {
            name: 'Convert/Save...',
            shortcut: 'Ctrl+R',
            disable:true,
        },
        {
            name: 'Stream...',
            shortcut: 'Ctrl+S',
            disable:true,
        },
        {},
        {
            name: 'Quit at the end of playlist',
            disable:true,
        },
        {
            name: 'Quit',
            icon: 'exit',
            shortcut: 'Ctrl+Q',
            disable:true,
        }
    ]},
    {name: 'Playback', child: [
            {
                name: 'Title',
                child: [],
                disable: true},
            {
                name: 'Chapter',
                child: [],
                disable: true},
            {
                name: 'Program',
                child: [],
                disable: true},
            {
                name: 'Custom Bookmark',
                child: [],
                disable: true},
            {},
            {
                name: 'Renderer',
                child: [],
                disable: true
            },
            {},
            {
                name: 'Speed',
                disable:true,
            },
            {},
            {
                name: 'Jump Forward',
                icon: 'play',
                disable:true,
            },
            {
                name: 'Jump Backward',
                icon: 'stop',
                disable:true,
            },
            {
                name: 'Jump to Specific Time',
                shortcut: 'Ctrl+T',
                disable:true,
            },
            {},
            {
                name: 'Play',
                icon: 'play',
                disable:true,
            },
            {
                name: 'Stop',
                icon: 'stop',
                disable:true,
            },
            {
                name: 'Previous',
                icon: 'previous',
                disable:true,
            },
            {
                name: 'Next',
                icon: 'next',
                disable:true,
            },
            {
                name: 'Record',
                icon: 'record',
                disable:true,
            }
        ]},
    {name: 'Audio', child: [
            {
                name: 'Audio Track',
                child: [],
                disable:true,
            },
            {
                name: 'Audio Device',
                child: [],
                disable:true,
            },
            {
                name: 'Stereo Mode',
                child: [],
                disable:true,
            },
            {},
            {
                name: 'Visualization',
                child: [],
                disable:true,
            },
            {},
            {
                name: 'Increase Volume',
                icon: 'volume_high',
                disable:true,
            },
            {
                name: 'Decrease Volume',
                icon: 'volume_low',
                disable:true,
            },
            {
                name: 'Mute',
                icon: 'volume_muted',
                disable:true,
            },


        ]},
    {name: 'Video', child: [
            {
                name: 'Video Track',
                child: [],
                disable:true,
            },
            {},
            {
                name: 'Fullscreen',
                disable:true,
            },
            {
                name: 'Always Fit Window',
                disable:true,
            },
            {
                name: 'Set as Wallpaper',
                disable:true,
            },
            {},
            {
                name: 'Zoom',
                child: [],
                disable:true,
            },
            {
                name: 'Aspect Ratio',
                child: [],
                disable:true,
            },
            {
                name: 'Crop',
                child: [],
                disable:true,
            },
            {
                name: 'Deinterlance',
                child: [],
                disable:true,
            },
            {
                name: 'Deinterlance Mode',
                child: [],
                disable:true,
            },
            {},
            {
                name: 'Take Snapshot',
                disable:true,
            }

        ]},
    {name: 'Subtitle', child: [
            {
                name: 'Add Subtitle File...',
                disable:true,
            },
            {
                name: 'Sub Track',
                child: [],
                disable:true,
            }

        ]},
    {name: 'Tools', child: [
            {
                name: 'Effects and Filters',
                icon: 'setting',
                shortcut: 'Ctrl+E',
                disable:true,
            },
            {
                name: 'Track Synchronization',
                disable:true,
            },
            {
                name: 'Media Information',
                icon: 'info',
                shortcut: 'Ctrl+I',
                disable:true,
            },
            {
                name: 'Codec Information',
                icon: 'info',
                shortcut: 'Ctrl+J',
                disable:true,
            },
            {
                name: 'VLM Configuration',
                shortcut: 'Ctrl+Shift+W',
                disable:true,
            },
            {
                name: 'Program Guide',
                disable:true,
            },
            {
                name: 'Messages',
                icon: 'messages',
                shortcut: 'Ctrl+M',
                disable:true,
            },
            {
                name: 'Plugins and Extensions',
                disable:true,
            },
            {},
            {
                name: 'Customize Interface...',
                icon: 'preferences',
                disable:true,
            },
            {
                name: 'Preferences',
                icon: 'preferences',
                shortcut: 'Ctrl+P',
                disable:true,
            }
        ]},
    {name: 'View', child: [
            {
                name: 'Playlist',
                icon:'playlist',
                shortcut: 'Ctrl+L',
                disable:true,
            },
            {
                name: 'Docked Playlist',
                disable:true,
            },
            {
                name: 'Playlist View Mode',
                child: [],
                disable:true,
            },
            {},
            {
                name: 'Always on top',
                disable:true,
            },
            {},
            {
                name: 'Minimal Interface',
                shortcut: 'Ctrl+H',
                disable:true,
            },
            {
                name: 'Fullscreen Interface',
                shortcut: 'F11',
                disable:true,
            },
            {
                name: 'Advanced Controls',
                disable:true,
            },
            {
                name: 'Status Bar',
                disable:true,
            },
            {},
            {
                name: 'Add Interface',
                child: [],
                disable:true,
            },
            {},
            {
                name: 'VLsub',
                disable:true,
            },
    ]},
    {name: 'Help', child: [
        {
            name: 'Help',
            icon: 'help',
            shortcut: 'F1',
            disable:true,
        },
        {
            name: 'Check for Updates...',
            disable:true,
        },
        {},
        {
            name: 'About',
            icon: 'info',
            shortcut: 'Shift+F1',
            disable:true,
        }
    ]}
]
