import { useGlobalState } from "../../Hooks/useGlobalState";

const limits = {
    KeyPartnerships: 728,
    KeyActivities: 364,
    ValuePropositions: 728,
    CustomerRelationships: 364,
    CustomerSegments: 728,
    Channels: 364,
    KeyResources: 364,
    RevenueStreams: 420,
    CostStructure: 420,
    BrainstormingNotes: 728
}

export default function Percentage({ objName }) {
    const { form } = useGlobalState();

    const handleTopPercentage = (objeName) => {
        const maxLen = limits[objeName] / 28
        const percentage = Math.floor(form[objeName].list.length / maxLen * 100)
        return percentage
    }
    return form[objName].list.length > 0 && (
        <div className='relative w-full bg-secondary h-1 flex mb-2'>
            <div className='absolute bg-primary h-1' style={{ width: `${(handleTopPercentage(objName) > 100 ? "100%" : handleTopPercentage(objName))}%` }}></div>
            {
                handleTopPercentage(objName) >= 100 ? null : <span className='ml-auto m-2 text-xs'>{100 - handleTopPercentage(objName)}% Left</span>
            }
        </div>
    )
}
