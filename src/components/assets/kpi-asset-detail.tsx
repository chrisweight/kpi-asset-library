import BusinessQuestionCard from '../business-question-card';
import { AssetDetailHeader } from './asset-detail-header';
import { AssetDetailProps } from './model';
import { KPIAsset } from '@/model';
import { AssetDetailFooter } from './asset-detail-footer';

export default function KPIAssetDetail({ asset }: AssetDetailProps) {
  const a = asset as KPIAsset;
  const questions = a.businessQuestions;

  return (
    <div className="flex flex-col items-center">
      <AssetDetailHeader asset={asset} />
      <div className="w-full mb-4 mt-4 p-4 rounded-md border-2 border-gray-100">
        {/* 
          TODO: These aren't yet defined beyond a basic UX flow property,
          so we'll wait until we have a discussion around what these should
          look like, and what they represent.
          Are they just line items as with the bits layout asset view?
        */}
        <h1 className='font-semibold'>TODO</h1>
        <ul>
          <li>Metric Ids</li>
          <li>Calculation</li>
          <li>Visuals Applicable</li>
          <li>Affiliate Applicability</li>
        </ul>
      </div>
      {
       questions && questions.length > 0 && 
        <div className="w-full mb-8">
          <h2 className="font-bold text-2xl mb-4">Business Questions</h2>
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 w-full">
            {questions.map(q => <BusinessQuestionCard question={q} key={q.id} />)}
          </div>
        </div>
      }
      <AssetDetailFooter asset={asset} />
    </div>
  );
}