const getParentIdx = (idx: number) => (idx - (idx % 2 === 0 ? 2 : 1)) / 2;
const getChildrenIdx = (idx: number) => [idx * 2 + 1, idx * 2 + 2];

export const insert = (arr: number[], num: number) => {
    arr.push(num);

    let iIdx = arr.length - 1;
    let pIdx = getParentIdx(iIdx);

    while (arr[iIdx] < arr[pIdx]) {
        [arr[iIdx], arr[pIdx]] = [arr[pIdx], arr[iIdx]];

        iIdx = pIdx;
        pIdx = getParentIdx(iIdx);
    }

    return arr; // ??
};

export const extractMin = (arr: number[]) => {
    const [min] = arr;

    [arr[arr.length - 1], arr[0]] = [arr[0], arr[arr.length - 1]];
    arr.pop();

    let cur = 0;
    let [r, l] = getChildrenIdx(cur);

    while (arr[cur] > arr[r] || arr[cur] > arr[l]) {
        if (arr[l] < arr[r]) {
            [arr[cur], arr[l]] = [arr[l], arr[cur]];

            cur = l;
            [r, l] = getChildrenIdx(cur);
        } else {
            [arr[cur], arr[r]] = [arr[r], arr[cur]];

            cur = r;
            [r, l] = getChildrenIdx(cur);
        }
    }

    return min;
};

