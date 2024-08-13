export type Node = { peerId: string; multiaddr: string };

export const stage: Node[] = [
    {
        multiaddr: '/dns4/0-stage.fluence.dev/tcp/9000/wss/p2p/12D3KooWDcpWuyrMTDinqNgmXAuRdfd2mTdY9VoXZSAet2pDzh6r',
        peerId: '12D3KooWDcpWuyrMTDinqNgmXAuRdfd2mTdY9VoXZSAet2pDzh6r',
    }
];

export const testNet: Node[] = [
    {
        multiaddr: '/dns4/0-dar.fluence.dev/tcp/9000/wss/p2p/12D3KooWMhVpgfQxBLkQkJed8VFNvgN4iE6MD7xCybb1ZYWW2Gtz',
        peerId: '12D3KooWMhVpgfQxBLkQkJed8VFNvgN4iE6MD7xCybb1ZYWW2Gtz',
    },
    {
        multiaddr: '/dns4/1-dar.fluence.dev/tcp/9000/wss/p2p/12D3KooWEXNUbCXooUwHrHBbrmjsrpHXoEphPwbjQXEGyzbqKnE9',
        peerId: '12D3KooWEXNUbCXooUwHrHBbrmjsrpHXoEphPwbjQXEGyzbqKnE9',
    },
    {
        multiaddr: '/dns4/2-dar.fluence.dev/tcp/9000/wss/p2p/12D3KooWHk9BjDQBUqnavciRPhAYFvqKBe4ZiPPvde7vDaqgn5er',
        peerId: '12D3KooWHk9BjDQBUqnavciRPhAYFvqKBe4ZiPPvde7vDaqgn5er',
    },
];

export const kras: Node[] = [
    {
        multiaddr: '/dns4/0-kras.fluence.dev/tcp/9000/wss/p2p/12D3KooWSD5PToNiLQwKDXsu8JSysCwUt8BVUJEqCHcDe7P5h45e',
        peerId: '12D3KooWSD5PToNiLQwKDXsu8JSysCwUt8BVUJEqCHcDe7P5h45e',
    },
    {
        multiaddr: '/dns4/1-kras.fluence.dev/tcp/9000/wss/p2p/12D3KooWR4cv1a8tv7pps4HH6wePNaK6gf1Hww5wcCMzeWxyNw51',
        peerId: '12D3KooWR4cv1a8tv7pps4HH6wePNaK6gf1Hww5wcCMzeWxyNw51',
    },
    {
        multiaddr: '/dns4/2-kras.fluence.dev/tcp/9000/wss/p2p/12D3KooWKnEqMfYo9zvfHmqTLpLdiHXPe4SVqUWcWHDJdFGrSmcA',
        peerId: '12D3KooWKnEqMfYo9zvfHmqTLpLdiHXPe4SVqUWcWHDJdFGrSmcA',
    },
];

// for backward compatibility
export const krasnodar = kras;

export const randomKras = () => {
    return randomItem(kras);
};

export const randomTestNet = () => {
    return randomItem(testNet);
};

export const randomStage = () => {
    return randomItem(stage);
};

function randomItem(arr: Node[]) {
    const index = randomInt(0, arr.length);
    return arr[index];
}

function randomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min)) + min;
}
