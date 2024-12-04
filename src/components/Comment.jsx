import Image from "./Image";

const Comment = () => {
  return (
    <div className="p-4 bg-slate-50 rounded-xl mb-8">
      <div className="flex items-center gap-4">
        <Image src="userImg.jpeg" className="w-10 h-10 rounded-full object-cover" w="40" />
        <span className="font-medium">Joe Doe</span>
        <span className="text-sm text-gray-500">2 days ago</span>
      </div>
      <div className="mt-4">
        <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Platea consectetur class hendrerit scelerisque justo mattis. Blandit velit rhoncus euismod commodo ad condimentum.</p>
      </div>
    </div>
  );
}
export default Comment;