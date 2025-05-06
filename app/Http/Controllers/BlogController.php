<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use App\Http\Requests\StoreBlogRequest;
use App\Http\Requests\UpdateBlogRequest;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Str;

class BlogController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreBlogRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Blog $blog): Response
    {
        $ogTags = [
            'title' => $blog->title,
            'description' => Str::limit(strip_tags($blog->excerpt), 200),
            'image' => asset('storage/' . $blog->picture1),
            'url' => route('blog.show', $blog),
        ];

        request()->attributes->set('og', $ogTags);

        $data = [
            'blogDetail' => $blog,
            'relatedNews' => Blog::select(['title', 'slug', 'excerpt', 'picture1', 'created_at'])->latest()->take(3)->get(),
        ];
        return Inertia::render('pks/berita/[slug]/page', $data);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Blog $blog)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateBlogRequest $request, Blog $blog)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Blog $blog)
    {
        //
    }
}
