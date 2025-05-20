<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Official PKS Bulukumba',
            'email' => 'official8@bulukumba.pks.id',
            'password' => 'pks08bulukumba',
        ]);

        $this->call(AgendaSeeder::class);
        $this->call(BlogSeeder::class);
        $this->call(StrukturSeeder::class);
        $this->call(KontakSeeder::class);
    }
}
