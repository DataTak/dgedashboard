import { dashboards } from '../../../data/dashboards';
import Link from 'next/link';

export default function DashboardPage({ params }: { params: { id: string } }) {
  const dashboard = dashboards.find(d => d.id === params.id);

  if (!dashboard) {
    return (
      <div className="min-h-screen p-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-2xl font-bold text-red-600">대시보드를 찾을 수 없습니다.</h1>
          <Link href="/" className="mt-4 text-blue-600 hover:underline">홈으로 돌아가기</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <Link href="/" className="text-blue-600 hover:underline">← 홈으로 돌아가기</Link>
        </div>
        
        <h1 className="text-3xl font-bold mb-8">{dashboard.title}</h1>
        
        <div className="w-full aspect-video bg-white rounded-lg shadow-lg overflow-hidden">
          <div dangerouslySetInnerHTML={{ __html: dashboard.embedCode }} />
        </div>
      </div>

      <script type="text/javascript" src="https://public.tableau.com/javascripts/api/viz_v1.js"></script>
    </div>
  );
} 