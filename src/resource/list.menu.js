import {dialog} from "../store/slice.template";

export const menuList = [
    {name: 'Media', child:[
        {name: 'Open File...', disable:true, action: dialog('open-file'), icon: 'file_asym', shortcut: 'Ctrl+O'},
        {name: 'Open Multiple Files...', action: dialog('media-file'), icon: 'file_asym', shortcut: 'Ctrl+Shift+O'},
        {name: 'Open Folder...', action: dialog('open-folder'), icon: 'folder_gray', shortcut: 'Ctrl+F'},
        {name: 'Open Disc...', action: dialog('media-disc'), icon: 'disc', shortcut: 'Ctrl+D'},
        {name: 'Open Network Stream...',child:[], action: dialog('media-stream'), icon: 'lan', shortcut: 'Ctrl+N'},
        {name: 'Open Capture Device...', action: dialog('media-device'), icon: 'capture_card', shortcut: 'Ctrl+C'},
        {name: 'Open Location from clipboard', action: dialog('open-url'), shortcut: 'Ctrl+V'},
        {name: 'Open Recent Media'},
        {},
        {name: 'Save playlist to File...', shortcut: 'Ctrl+Y'},
        {name: 'Convert/Save...', shortcut: 'Ctrl+R'},
        {name: 'Stream...', shortcut: 'Ctrl+S'},
        {},
        {name: 'Quit at the end of playlist'},
        {name: 'Quit', icon: 'exit', shortcut: 'Ctrl+Q'}
    ]},
    {name: 'Playback', child: [
            {name: 'Title', child: [], disable: true},
            {name: 'Chapter', child: [], disable: true},
            {name: 'Program', child: [], disable: true},
            {name: 'Custom Bookmark', child: [], disable: true},
            {},
            {name: 'Renderer', child: [], disable: true},
            {},
            {name: 'Speed'},
            {},
            {name: 'Jump Forward', icon: 'play'},
            {name: 'Jump Backward', icon: 'stop'},
            {name: 'Jump to Specific Time', shortcut: 'Ctrl+T'},
            {},
            {name: 'Play', icon: 'play'},
            {name: 'Stop', icon: 'stop'},
            {name: 'Previous', icon: 'previous'},
            {name: 'Next', icon: 'next'},
            {name: 'Record', icon: 'record'}
        ]},
    {name: 'Audio', child: [
            {name: 'Audio Track', child: []},
            {name: 'Audio Device', child: []},
            {name: 'Stereo Mode', child: []},
            {},
            {name: 'Visualization', child: []},
            {},
            {name: 'Increase Volume', icon: 'volume_high'},
            {name: 'Decrease Volume', icon: 'volume_low'},
            {name: 'Mute', icon: 'volume_muted'},


        ]},
    {name: 'Video', child: [
            {name: 'Video Track', child: []},
            {},
            {name: 'Fullscreen'},
            {name: 'Always Fit Window'},
            {name: 'Set as Wallpaper'},
            {},
            {name: 'Zoom', child: []},
            {name: 'Aspect Ratio', child: []},
            {name: 'Crop', child: []},
            {name: 'Deinterlance', child: []},
            {name: 'Deinterlance Mode', child: []},
            {},
            {name: 'Take Snapshot'}

        ]},
    {name: 'Subtitle', child: [
            {name: 'Add Subtitle File...'},
            {name: 'Sub Track', child: []}

        ]},
    {name: 'Tools', child: [
            {name: 'Effects and Filters', icon: 'setting', shortcut: 'Ctrl+E'},
            {name: 'Track Synchronization'},
            {name: 'Media Information', icon: 'info', shortcut: 'Ctrl+I'},
            {name: 'Codec Information', icon: 'info', shortcut: 'Ctrl+J'},
            {name: 'VLM Configuration', shortcut: 'Ctrl+Shift+W'},
            {name: 'Program Guide'},
            {name: 'Messages', icon: 'messages', shortcut: 'Ctrl+M'},
            {name: 'Plugins and Extensions'},
            {},
            {name: 'Customize Interface...', icon: 'preferences'},
            {name: 'Preferences', icon: 'preferences', shortcut: 'Ctrl+P'}
        ]},
    {name: 'View', child: [
            {name: 'Playlist', icon:'playlist', shortcut: 'Ctrl+L'},
            {name: 'Docked Playlist'},
            {name: 'Playlist View Mode', child: []},
            {},
            {name: 'Always on top'},
            {},
            {name: 'Minimal Interface', shortcut: 'Ctrl+H'},
            {name: 'Fullscreen Interface', shortcut: 'F11'},
            {name: 'Advanced Controls'},
            {name: 'Status Bar'},
            {},
            {name: 'Add Interface', child: []},
            {},
            {name: 'VLsub'},
    ]},
    {name: 'Help', child: [
        {name: 'Help', icon: 'help', shortcut: 'F1'},
        {name: 'Check for Updates...'},
        {},
        {name: 'About', icon: 'info', shortcut: 'Shift+F1'}
    ]}
]
