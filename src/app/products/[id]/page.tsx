export default function ProductDetail(props: any) {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div>제품 상세 페이지</div>
            parameters : {props.params.id}
        </main>
    );
}
